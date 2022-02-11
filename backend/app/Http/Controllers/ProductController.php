<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ProductModel;

class ProductController extends Controller
{
    public function getAllProduct() {
        $product = ProductModel::get()->toJson(JSON_PRETTY_PRINT);
        return response($product, 200);
    }    

    // public function createProduct(Request $request) {
    //     $product = new ProductModel;
    //     $product->title = $request->title;
    //     $product->description = $request->description;
    //     $product->price = $request->price;
    //     $product->amount = $request->amount;
        
    //     return response()->json([
    //         "message" => "product record created"
    //     ], 201);
    // }

    // public function getProduct($id) {
    //     if (Product::where('id', $id)->exists()) {
    //         $product = ProductModel::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);

    //         return response($product, 200);

    //     } else {
    //         return response()->json([
    //             "message" => "Product not found"
    //         ], 404);
    //     }
    // }

    // public function updateProduct(Request $request, $id) {
    //     if(Product::where('id', $id)->exists()) {
    //         $product = ProductModel::find($id);
    //         $product->title = is_null($request->title) ? $product->title : $request->title;
    //         $product->description = is_null($request->desciption) ? $product->description : $request->description;
    //         $product->price = is_null($request->price) ? $product->price : $request->price;
    //         $product->amount = is_null($request->amount) ? $product->amount : $request->amount;
    //         $product->save();

    //         return response()->json([
    //             "message" => "records update successfully"
    //         ], 200);
            
    //     } else {
    //         return response()->json([
    //             "message" => "product not found"
    //         ], 404);
    //     }
    // }

    // public function deleteProduct ($id) {
    //     if(ProductModel::where('id', $id)->exists()) {
    //         $product = Product::find($id);
    //         $product->delete();
    
    //         return response()->json([
    //             "message" => "records deleted"
    //         ], 202);
    //     } else {
    //         return response()->json([
    //             "message" => "Product not found"
    //         ], 404);
    //     }
    // }
}
