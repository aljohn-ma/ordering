<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreQEH extends FormRequest
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
            'qeh_code' => 'required',
            'qeh_type' => 'required',
            'qeh_description' => 'required',
            'release_date' => 'required|date|after_or_equal:today',
            'release_time' => 'required|date_format:h:i a',
            'end_date' => 'required|date|after_or_equal:release_date',
            'end_time' => 'required|date_format:h:i a',
            'contents' => 'required',
            'duration' => 'required|integer'
        ];
    }

    public function messages()
    {
        return [
            'qeh_code.required' => 'This field is required.',
            'qeh_type.required' => 'This field is required.',
            'qeh_description.required' => 'This field is required.',

            'release_date.required' => 'This field is required.',
            'release_date.date' => 'This is not a valid date.',
            'release_time.required' => 'This field is required.',
            'release_time.date_format' => 'Inavalid format.',
            
            'end_date.required' => 'This field is required.',
            'end_date.date' => 'This is not a valid date.',
            'end_time.required' => 'This field is required.',
            'end_time.date_format' => 'Inavalid format.',
            
            'duration.required' => 'This field is required.',


            'contents.required' => 'Please select at least one content.',

        ];
    }
}
