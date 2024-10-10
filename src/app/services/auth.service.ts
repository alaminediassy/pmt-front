import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

interface LoginUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerApiUrl = 'http://localhost:8091/api/users/register';
  private loginApiUrl = 'http://localhost:8091/api/users/login';

  constructor(private http: HttpClient) { }

  // Méthode pour enregistrer un utilisateur
  registerUser(user: RegisterUser): Observable<any> {
    return this.http.post(this.registerApiUrl, user);
  }

  // Méthode pour connecter un utilisateur et obtenir un token
  loginUser(user: LoginUser): Observable<any> {
    return this.http.post(this.loginApiUrl, user);
  }

  // Méthode pour vérifier si un utilisateur est connecté (vérification du token)
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;  // Vérifier si un token est présent dans le localStorage
  }

  // Méthode pour déconnecter un utilisateur (supprimer le token)
  logout(): void {
    localStorage.removeItem('token');  // Supprimer le token du localStorage
  }

  // Méthode pour obtenir le token du localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Méthode pour envoyer des requêtes avec un token (pour les endpoints protégés)
  getWithAuthHeader(endpoint: string): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(endpoint, { headers });
  }
}
