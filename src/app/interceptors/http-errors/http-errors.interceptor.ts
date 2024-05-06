import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
    const snackBar = inject(MatSnackBar);

    return next(req).pipe(
        catchError((err) => {
            snackBar.open('Ops, ocorreu um erro', 'Fechar', {
                duration: 5000,
            });

            return throwError(() => err);
        })
    );
};
