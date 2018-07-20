(function () {
  var win = window,
      doc = document,
      Settings = (function() {
        Settings.prototype.init = function () {
          this.canvas_init();
          this.event_set_handler();
        };
        // init
        Settings.prototype.canvas_init = function () {
          this.canvas = doc.getElementById('canvas')
          this.context = this.canvas.getContext('2d')
        }

        // event set
        Settings.prototype.event_set_handler = function () {
          var _this = this;
          this.canvas.addEventListener('click', click_handler)

          function click_handler(e) {
            var point = _this.get_event_point(e.clientX, e.clientY);
            _this.RectRender(point.x, point.y, 100, 100); 
          }
        }

        // get event point
        Settings.prototype.get_event_point = function (client_X, client_Y) {
          return {
              x: client_X - this.canvas.getBoundingClientRect().left,
              y: client_Y - this.canvas.getBoundingClientRect().top
          }
        }

        // render
        Settings.prototype.RectRender = function (x,y,w,h) {
          // var ctx = this.context;
          // ctx.beginPath();
          _t.context.fillRect(x-50, y-50, w, h);
        }
      })
  
  var _t = new Settings();
  _t.init();
})(window);