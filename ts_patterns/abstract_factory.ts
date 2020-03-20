/**
 * Интерфейс абстрактной фабрики и классы конкретных фабрик на его основе.
 * Конкретные фабрики производят конкретные продукты (их реализация ниже)
 */

interface AbstractFactory {
    createBottle(): AbstractBottle;
    createGlass(): AbstractGlass;
}

class GreenFactory implements AbstractFactory {
    createBottle(): AbstractBottle {
        return new GreenBottle();
    };
    createGlass(): AbstractGlass {
        return new GreenGlass();
    };
}

class BlueFactory implements AbstractFactory {
    createBottle(): AbstractBottle {
        return new BlueBottle();
    };
    createGlass(): AbstractGlass {
        return new BlueGlass();
    };
}

/**
 * Интерфейс для первого абстрактного продукта
 * и классы для его разных (конкретных) видов
 */

interface AbstractBottle {
    bottleFunction(): string;
}

class GreenBottle implements AbstractBottle {
    bottleFunction(): string {
        return 'Hi i\'m a green bottle';
    }
}

class BlueBottle implements AbstractBottle {
    bottleFunction(): string {
        return 'Hi i\'m a blue bottle';
    }
}

/**
 * Интерфейс для второго абстрактного продукта
 * и классы для его разных (конкретных) видов
 */

interface AbstractGlass {
    glassFunction(): string;
}

class GreenGlass implements AbstractGlass {
    glassFunction(): string {
        return 'Hi i\'m a green glass';
    }
}

class BlueGlass implements AbstractGlass {
    glassFunction(): string {
        return 'Hi i\'m a blue glass';
    }
}

/**
 * Функция для вызова всех продуктов одной конкретной фабрики
 */

function getAllProductsFromFactory(factory: AbstractFactory) {
    const bottle = factory.createBottle();
    const glass = factory.createGlass();

    console.log(bottle.bottleFunction());
    console.log(glass.glassFunction());
}

/**
 * Вызов обеих фабрик.
 *
 * Ожидается вывод:
 * Hi i'm a green bottle
 * Hi i'm a green glass
 * Hi i'm a blue bottle
 * Hi i'm a blue glass
 */

getAllProductsFromFactory(new GreenFactory());
getAllProductsFromFactory(new BlueFactory());
