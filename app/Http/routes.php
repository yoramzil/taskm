<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

use App\Task;
use Illuminate\Http\Request;

Route::group(['middleware' => ['web']], function () {
    /**
     * Show Task Dashboard
     */
    Route::get('/', function () {
        return view('welcome');
    });

    Route::get('/tasks', function () {
        return view('welcome', [
            'tasks' => Task::orderBy('id', 'desc')->get()
        ]);
    });

    Route::get('/api/tasks', function () {
        $items = Task::orderBy('id', 'desc')->get();
        foreach ($items as $value) {
            $item = new stdClass;
            $item->id = $value['id'];
            $item->type = 'task';
            $item->attributes = new stdClass;
            $item->attributes->task = $value['task'];
            $item->attributes->done = $value['done'];
            $itemlist[] = $item;
        }
        $ret = new stdClass;
        $ret->data = $itemlist; 
        return Response::json($ret);
    })->middleware('cors');

    Route::options('/api/tasks', function () {
        $items = Task::orderBy('id', 'desc')->get();
        foreach ($items as $value) {
            $item = new stdClass;
            $item->id = $value['id'];
            $item->type = 'task';
            $item->attributes = new stdClass;
            $item->attributes->task = $value['task'];
            $item->attributes->done = $value['done'];
            $itemlist[] = $item;
        }
        $ret = new stdClass;
        $ret->data = $itemlist; 
        return Response::json($ret);
    })->middleware('cors');

    /**
     * Add New Task
     */
    Route::post('/api/tasks', function (Request $request) {
        $validator = Validator::make($request->all(), [
            'task' => 'required|max:255',
        ]);

        //if ($validator->fails()) {
//            return redirect('/')
//                ->withInput()
//                ->withErrors($validator);
//        }

        $task = new Task;
        $task->task = $request->data['attributes']['task'];
        $task->done = $request->data['attributes']['done'];
        $task->save();
        return Response::json('task created');
        // return redirect('/');
    })->middleware('cors');

    /**
     * Delete Task
     */
    

    Route::delete('/api/tasks/{id}', function ($id) {
        Task::findOrFail($id)->delete();
        return Response::json('delete');

        //return redirect('/');
    })->middleware('cors');

    Route::patch('/api/tasks/{id}', function ($id) {
        $rec = Task::find($id);
        if ($rec == null) {
            return Response::json('record not found');
        } else {
            $rec->done = !$rec->done;
            $rec->save();
            return Response::json('update');
            return redirect('/');
        };
        

    })->middleware('cors');

    Route::options('/api/tasks/{id}', function ($id) {
        Task::findOrFail($id)->delete();
        return Response::json(true);

        return redirect('/');
    })->middleware('cors');

    Route::get('/api/tasks/{id}', function ($id) {
        // Task::findOrFail($id)->delete();
        return Response::json('get');
        //return redirect('/');
    })->middleware('cors');

    Route::get('{data?}', function(){  
        return View::make('welcome');  
    })->where('data', '.*')->middleware('cors'); 
});
