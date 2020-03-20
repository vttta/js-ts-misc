class Singleton {
    /**
     * create a static variable.
     * 'static' belongs to the class but not to its instances
     *
     * 'private constructor' is to not be able to use 'new ...'
     */

    private static instance: Singleton;
    private constructor() {};

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    sayHi(): string {
        return 'hi!';
    }
}

function test() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('all OK!');
    }
    else {
        console.log('NOK: different instances!')
    }
}

console.log(Singleton.getInstance().sayHi());
test();
