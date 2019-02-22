<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSchedLine extends FormRequest
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
        return [
            'from_time' => 'required|date_format:h:i a',
            'to_time' => 'required|date_format:h:i a|after:from_time',
            'subject_id' => 'required',
            'teacher_id' => 'required',
            'room_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'from_time.required' => 'This field is required.',
            'to_time.required' => 'This field is required.',
            'from_time.date_format' => 'Invalid format.',
            'to_time.date_format' => 'Invalid format.',
            'to_time.after' => 'Must be after from field.',
            'subject_id.required' => 'Please select a subject.',
            'teacher_id.required' => 'Please select a teacher.',
            'room_id.required' => 'Please select a room.',
        ];
    }
}
