<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

b,
i {
  font-weight: normal;
  font-style: normal;
}

a,
a:visited,
a:active {
  color: #000;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
}

input:active,
input:focus {
  -webkit-appearance: none;
  border: none;
  border-radius: 0;
  outline: none;
}

input,
input[type="button"],
input[type="submit"],
textarea {
  -webkit-appearance: none;
  border-radius: 0;
  border:none;
  outline: none;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: #f5f5f5;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.mask {
    background:rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:10;
}

@keyframes slideInLeft {
	from {
		transform: translate3d(-100%, 0, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideInRight {
	from {
		transform: translate3d(100%, 0, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideDown {
	from {
		opacity: 0;
		transform: translate3d(0, -100%, 0);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes slideLeft {
	from {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes bounceInUp {
	from,
	60%,
	75%,
	90%,
	to {
		animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
	}
	from {
		opacity: 0;
		transform: translate3d(0, 3000px, 0);
	}
	60% {
		opacity: 1;
		transform: translate3d(0, -20px, 0);
	}
	75% {
		transform: translate3d(0, 20rpx, 0);
	}
	90% {
		transform: translate3d(0, -5px, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
