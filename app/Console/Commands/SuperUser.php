<?php

namespace App\Console\Commands;

use App\Models\AppFeature;
use App\Models\User;
use App\Models\UserAccess;
use Illuminate\Console\Command;

class SuperUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'createsuperuser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Super User';

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
        $input['first_name'] = $this->ask('First name');
        $input['last_name'] = $this->ask('Last name');
        $input['email'] = $this->ask('Email');
        $input['username'] = $this->ask('Username');

        $input['password'] = $this->secret('Password');
        $input['confirm_password'] = $this->secret('Confirm Password');
        $input['profile_path'] = '/images/admin.png';

        if (!is_null($input['email']) && !is_null($input['password']) &&
            $input['password'] == $input['confirm_password']) {
            $input['password'] = bcrypt($input['password']);
            $input['user_type'] = 1;
            if ($user = User::create($input)->id) {
                if (count($access = AppFeature::all())) {

                    foreach ($access as $a) {
                        UserAccess::create([
                            'feature_id' => $a->id,
                            'user_id' => $user,
                            'can_add' => true,
                            'can_edit' => true,
                            'can_delete' => true,
                        ]);
                    }
                    
                    $this->info('Create super user successful.');
                }
            }
        }

    }
}
