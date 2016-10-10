export const Throttle = {
	//事件节流，
    throttle: function(fn, delay, mustRunDelay) {
        var timer = null;
        var t_start;
        return function() {
            var context = this,
                args = arguments,
                t_curr = +new Date();
            clearTimeout(timer);
            if (!t_start) {
                t_start = t_curr;
            }
            if (t_curr - t_start >= mustRunDelay) {
                fn.apply(context, args);
                t_start = t_curr;
            } else {
                timer = setTimeout(function() {
                    fn.apply(context, args);
                }, delay);
            }
        };
    },
    bindEvents: function(fn, that, selector) {
        //事件截流，延迟50毫秒执行
        // let select = selector || window;
        // $(select).on('scroll', this.throttle(fn, 10).bind(that)); //js事件节流
        var $selecotr = document.querySelector(selector);
        $selecotr && $selecotr.addEventListener('scroll', this.throttle(fn, 10).bind(that)); //js事件节流

    }
};