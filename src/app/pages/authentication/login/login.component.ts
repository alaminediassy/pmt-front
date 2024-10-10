import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.form.valid) {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.authService.loginUser(user).subscribe({
        next: (response) => {
          console.log("Login successful", response);

          // Stocker le token JWT dans localStorage
          localStorage.setItem('token', response.token);

          // Rediriger l'utilisateur vers le tableau de bord
          this.router.navigate(['/dashboard']).then(() => {
            console.log('Redirected to dashboard');
          });
        },
        error: (error) => {
          // Afficher un message d'erreur en cas de problème de connexion
          console.error('Error during login', error);
          this.errorMessage = 'Email ou mot de passe incorrect.';
        }
      });
    } else {
      // Si le formulaire est invalide, montrer un message d'erreur
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
    }
  }
}
