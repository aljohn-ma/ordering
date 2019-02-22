<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudent extends FormRequest
{
    // private $req;
    public function __construct($request){
        $this->req = $request;
    }
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
        if(isset($this->req)){
            return [
                'student_code' => 'required|unique:students,student_code',
                'student_number' => 'required|unique:students,student_number',
            ];
        }
        return [
            //
        ];
    }
}
