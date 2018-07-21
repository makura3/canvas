(function () {
  const win = window,
      doc = document,
      Settings = (function() {
        Settings.prototype.init = () => {
          this.canvas_init()
          this.event_set_handler()
        };
        
        // init
        Settings.prototype.canvas_init = () => {
          this.canvas = doc.getElementById('canvas')
          this.context = this.canvas.getContext('2d')
        }

        // event set
        Settings.prototype.event_set_handler = () => {
          let _this = this
          this.canvas.addEventListener('click', click_handler)

          function click_handler(e) {
            let point = _this.get_event_point(e.clientX, e.clientY);
            _this.pathRender(point.x, point.y, 100, 100); 
          }
        }

        // get event point
        Settings.prototype.get_event_point = (client_X, client_Y) => {
          return {
              x: client_X - this.canvas.getBoundingClientRect().left,
              y: client_Y - this.canvas.getBoundingClientRect().top
          }
        }

        // render
        Settings.prototype.pathRender = (x, y, w, h) => {
          let _this = this;
          var ctx = _this.context;

          // 三角形 これもうちょっときれいに書けないかな
          ctx.beginPath();
          ctx.moveTo(x, y-50); // 一点目
          ctx.lineTo(x+40, y+25); // 二点目
          ctx.lineTo(x-40, y+25); // 三点目
          ctx.closePath();
          ctx.strokeStyle = '#FFF'; // 枠線の色
          ctx.stroke();
          
          // ctx.fillRect(x-50, y-50, w, h); //四角形
        }

        // animation
        Settings.prototype.setAnimation = () => {
          // settimeoutでそのうち書く
        }
      })
  
  const setting = new Settings();
  setting.init();
})(window);