<?php

namespace App\Exports;

use App\Models\QEHMultipleChoice;
use Maatwebsite\Excel\Concerns\FromCollection;

class QEHMultipleChoiceExport implements FromCollection
{
    public function __construct($id){
        $this->id = $id;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    { 
        return QEHMultipleChoice::where('qeh_id', $this->id)->where('deleted',0)->get();
    }
}
