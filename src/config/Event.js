class Event {
    handlers;

    constructor() {
        this.handlers={}
    }

    on (type, fn) {
        this.handlers[type] = this.handlers[type] || [];
        this.handlers[type].unshift(fn);
        return this;
    }

    off(type, fn) {
        const arr = this.handlers[type];
        if(arr) {
            if(!fn) {
                delete this.handlers[type];
                return this;
            }
            const index =arr.indexOf(fn)
            arr.splice(index, 1)
        }
        return this;
    }

    trigger(type, ...rest) {
        if(!this.handlers[type]) {
            return;
        }
        const args = rest;
        for (let index = 0; index < this.handlers[type].length; index++) {
            const fn = this.handlers[type][index];
            fn.apply(fn, args);
        }
        return this;
    }




}

export const globalEvent = new Event();