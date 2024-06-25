import * as CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Player } from '../../classes/Player.class';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  private password = environment.password;

  decryptFile(): Observable<Player[]> {
    const encryptedFilePath = this.apiUrl;

    return this.http.get(encryptedFilePath, { responseType: 'text' }).pipe(
      map((encryptedFileContent: string) => {
        try {
          const { encryptedData } = JSON.parse(encryptedFileContent);
          const secretKey = this.password;

          const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
          const decryptedJsonString = bytes.toString(CryptoJS.enc.Utf8);

          const decryptedData = JSON.parse(decryptedJsonString);

          return decryptedData;
        } catch (error) {
          console.error('Error al desencriptar:', error);
          throw error;
        }
      }),
      catchError((error) => {
        console.error('Error al obtener el archivo encriptado:', error);
        return throwError(
          () => new Error('Error al obtener el archivo encriptado'),
        );
      }),
    );
  }
}
