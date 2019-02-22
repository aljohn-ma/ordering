<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class StoreUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user_type = $this->input('user_type');
        $rules = [
            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'birthdate' => 'required|date',
            'username' => ['required', Rule::unique('users', 'username')->ignore($this->input('id'))],
            'email' => ['required', 'email', Rule::unique('users', 'email')->ignore($this->input('id'))],
            'password' => 'required|confirmed',
        ];

        if ($this->isMethod('put')) {
            $rules['password'] = 'sometimes|required|confirmed';
        }

        if ($user_type == config('constants.user_types.STUDENT')) {
            // Validate student
            $student_rules = [
                'student.student_code' => ['required', Rule::unique('students', 'student_code')->ignore($this->input('id'), 'user_id')],
                'student.student_number' => ['required', Rule::unique('students', 'student_number')->ignore($this->input('id'), 'user_id')],
                'student.level_id' => 'required',
                'student.section_id' => 'required',
                'student.schedule_id' => 'required',
            ];

            $rules = array_merge($rules, $student_rules);

        } else if ($user_type == config('constants.user_types.PARENT')) {
            // Validate guardian
            $guardian_rules = [
                'parent.pg_code' => ['required', Rule::unique('parents', 'pg_code')->ignore($this->input('id'), 'user_id')],
                'parent.student_id' => 'required',
                'parent.pg_relationship' => 'required',
            ];

            $rules = array_merge($rules, $guardian_rules);
        }

        return $rules;
    }
    
    public function messages()
    {
        return [
            'student.student_code.required' => 'Student code is required.',
            'student.student_code.unique' => 'Student code not available.',
            'student.student_number.required' => 'Student code is required.',
            'student.student_number.unique' => 'Student number not available.',
            'student.level_id.required' => 'Please select a level',
            'student.section_id.required' => 'Please select a section',
            'student.schedule_id.required' => 'Please select a schedule',
            'parent.pg_code.required' => 'This field is required',
            'parent.pg_code.unique' => 'This field is required',
            'parent.student_id.required' => 'Please select a student',
            'parent.pg_relationship.required' => 'This field is required',
        ];
    }
}
