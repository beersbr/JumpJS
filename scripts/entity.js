var Entity = (function(entity){
    entity = {};

    entity.Entity = function(args)
    {
        if(args == undefined) args = {};

        this._x = args.x || 0;
        this._y = args.y || 0;
        this.w = args.w || 0;
        this.h = args.h || 0;

        this.hw = this.w/2;
        this.hh = this.h/2;

        this.cx = this._x + this.w/2;
        this.cy = this._y + this.h/2;

        Object.defineProperty(this, "x", {
            set: function(v){
                
            }
        })

    }

    return entity;
})();