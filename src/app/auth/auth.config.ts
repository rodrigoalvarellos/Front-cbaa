import { NbAuthOptions, NbDummyAuthStrategy, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { HttpErrorResponse } from '@angular/common/http';

// https://akveo.github.io/nebular/docs/auth/nbpasswordauthstrategy#nbpasswordauthstrategy

export const AUTH_OPTIONS: NbAuthOptions = {
    strategies: [
        NbDummyAuthStrategy.setup({ name: 'demo', delay: 3000 }),
        NbPasswordAuthStrategy.setup({
            name: 'email',
            baseEndpoint: 'http://localhost:3000/auth',
            token: { class: NbAuthJWTToken, key: 'token' },
            login: {
                endpoint: '/login',
                method: 'post',
                redirect: { success: '/pages/dashboard', failure: null },
                defaultErrors: ['Email o password incorrectos. Intenta nuevamente'],
                defaultMessages: ['En breve seras redirigido al Home'],
            },
            register: {
                endpoint: '/register',
                method: 'post',
                redirect: { success: '/pages/dashboard', failure: null },
                defaultErrors: ['Intenta nuevamente dentro de un momento'],
                defaultMessages: ['Te registraste correctamente.'],
            },
            logout: {
                alwaysFail: false,
                endpoint: '/logout',
                method: 'delete',
                redirect: {
                  success: '/landing',
                  failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully logged out.'],
              },
            errors:  {
                getter: (module: string, res: HttpErrorResponse) => {
                    return [res.error.message];
                },
            },
        }),
    ],
    forms: {
        login: {
            redirectDelay: 500,
            strategy: 'email',
            rememberMe: true,
            showMessages: { success: true, error: true },
        },
        register: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: { success: true, error: true },
        },
        validation: {
            email: { required: true },
            password: { required: true, minLength: 6, maxLength: 50 },
            // fullName: { required: false, minLength: 4, maxLength: 50 },
        },
    },
};
