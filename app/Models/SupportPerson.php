<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupportPerson extends Model
{
    use HasFactory;

          /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'mnemonic',
        'type',

    ];
    protected $table = 'support_persons';

    public function supportPersonRoles()
    {
        return $this->belongsTo(
            SupportPersonRole::class,



        );

    }





}