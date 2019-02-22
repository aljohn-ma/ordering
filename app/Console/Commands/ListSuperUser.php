<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use DB;

class ListSuperUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'see:super_user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List lng';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $headers = ['ID', 'Firt name', 'Last name', 'Email'];
        $users = User::where('is_active', 1)->get(['id', 'first_name', 'last_name', 'email'])->toArray();
        $this->table($headers, $users);
    }
}
