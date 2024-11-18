import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [{
path : 'acceuil',
component : AcceuilComponent                                                                                
},{
path : 'connexion',
component : ConnexionComponent                                                                                            
},{
  path : 'inscription',
  component : InscriptionComponent                                                                                                  
}

                                                                               
];
