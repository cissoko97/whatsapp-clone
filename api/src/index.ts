import { Express } from 'express';

console.log('bonjour le monde je vous aimes');
console.log('bonjour le monde je vous aimes');
console.log('Merci pour le soutient');

export const Boris: (a: string, b: number) => string = (a = 'boris', b: number) => {
    return '';
}

interface IRobert {
    Boris: (a: string, b: number) => string
    Vanel: (a: number, b: number) => number
    boris: (b: string) => string

    sayHello(a: string, b: string): string
}

class Robert implements IRobert {
    sayHello(a: string, b: string): string {
        throw new Error('Method not implemented.');
    }

    Boris: (a: string, b: number) => string = (a = 'String', b: Number) => {
        return `${a} bonjour ${b}`;
    };
    Vanel: (a: number, b: number) => number = (a, b) => {
        return a * b;
    };

    boris = (b: string) => {
        switch (b.trim()) {
            case (9).toString():
                return 'r'
                break;

            default:
                return 't';
                break;
        }
    }
}
const Humain = new Robert();

console.log(Humain.Boris('string', 5));
console.log(Humain.Vanel(10.0, 5.0));
console.log(Humain.boris('9'));
