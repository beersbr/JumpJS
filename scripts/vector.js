var Vector = (function(v){
    v = {};

    /** @class represents a vector with 2 elements */
    v.Vector2 = function(args)
    {
        if(args == undefined) args = {};

        this.x = args.x || 0;
        this.y = args.y || 0;

        /** @function {Number, Number} x, y translates the vector by the given units */
        this.translate = function(x, y)
        {
            this.x += x;
            this.y += y;
        }

        /** @function {Number} factor multiplies each element of the vector by the given factor */
        this.magnify = function(factor)
        {
            this.x *= factor;
            this.y *= factor;
        }
    }

    /** @class represents a vector with 3 elements */
    v.Vector3 = function(args)
    {
        if(args == undefined) args = {};

        this.x = args.x || 0;
        this.y = args.y || 0;
        this.z = args.z || 0;

        /** @function {Number, Number, Number} x, y, z translates the vector by the given units */
        this.translate = function(x, y, z)
        {
            this.x += x;
            this.y += y;
            this.z += z;
        }

        /** @function {Number} factor multiplies each element of the vector by the given factor */
        this.magnify = function(factor)
        {
            this.x *= factor;
            this.y *= factor;
            this.z *= factor;
        }
    }

    return v;
})();
