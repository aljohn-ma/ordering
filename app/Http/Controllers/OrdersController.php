<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderedItem;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = [
            'discount' => $request->discount,
            'total_sales' => $request->total_sales,
            'total_vat' => $request->total_vat,
        ];

        $id = Order::create($data)->id;
        if ($id) {
            foreach ($request->items as $item) {
                $item_info = [
                    'order_id' => $id,
                    'item_id' => $item['id'],
                    'item_name' => $item['item_name'],
                    'description' => $item['description'],
                    'category_id' => $item['category_id'],
                    'price' => $item['price'],
                    'tax_amount' => $item['tax_amount'],
                    'quantity' => $item['quantity'],
                    'image_name' => $item['image_name'],
                ];
                OrderedItem::create($item_info);

            }
        }
        return response()->json(['success' => $id]);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
