<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreScheduleHead extends FormRequest
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
            'section_id' => 'required',
            'school_year' => 'required',
            'schedule_code' => 'required',
            'description' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'section_id.required' => 'Please select a section.',
        ];
    }
}
