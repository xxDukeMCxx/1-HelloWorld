class Duke {
    nuke: number;

    constructor() {
        this.nuke = 0;
    }

    public add(par1: number): void {
        this.nuke += par1;
    }

    public show(): void {
        console.log(this.nuke.toString() + "----");
    }

}


export { Duke };


