<?php

namespace App\Http\Requests;

use App\Models\QEH;
use Illuminate\Foundation\Http\FormRequest;

class StoreENQuestion extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $QEH = QEH::where('id', $this->input('qeh_id'))->first();
        if ($QEH->published) {
            return false;
        }
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
            'question' => 'required',
            'answers' => 'required|array',
            'answers.*.answer' => 'required|distinct',
            'answers.*.points' => 'required|integer|min:1',
        ];
    }

    public function messages()
    {
        return [
            'answers.required' => 'Please provide some answers to this question.',
            'answers.*.answer.required' => 'This field is required.',
            'answers.*.answer.distinct' => 'This field has a duplicate value.',
            'answers.*.points.required' => 'This field is required.',
            'answers.*.points.integer' => 'This field only accepts integers.',
            'answers.*.points.min' => 'Please enter number greater than 0.',
        ];
    }
}
