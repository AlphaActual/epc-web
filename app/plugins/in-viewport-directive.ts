export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.directive('in-viewport', {
		mounted(el, binding) {
			const defaultClassName = 'in-viewport';
			const once = binding.modifiers.once;

			let rootMargin = '0px';
			let onEnter = null;
			let onLeave = null;
			let classNames = defaultClassName;

			switch (typeof binding.value) {
				case 'string':
					if (binding.value.includes('px') || binding.value.includes('%')) {
						rootMargin = binding.value;
					} else {
						classNames = binding.value || defaultClassName;
					}
					break;
				case 'function':
					onEnter = binding.value;
					break;
				case 'object':
					if (binding.value !== null) {
						rootMargin = binding.value.rootMargin ?? '0px';
						onEnter = binding.value.onEnter ?? null;
						onLeave = binding.value.onLeave ?? null;
						classNames = binding.value.classNames ?? defaultClassName;
					}
					break;
				case 'number':
				case 'bigint':
				case 'boolean':
				case 'symbol':
					throw new Error('Invalid value type');
				case 'undefined':
					break;
			}

			const state = {
				isIntersecting: false,
				enterFired: once && classNames.split(' ').every(cls => el.classList.contains(cls)),
				leaveFired: false,
			};

			if (once && state.enterFired && !onLeave) {
				return;
			}

			const checkUnobserve = (observerParam: IntersectionObserver) => {
				if (once && observerParam) {
					const enterDone = !onEnter || state.enterFired;
					const leaveDone = !onLeave || state.leaveFired;

					if (enterDone && leaveDone) {
						observerParam.unobserve(el);
					}
				}
			};

			const handleViewportChange = (isIntersecting: boolean, observerParam: IntersectionObserver) => {
				if (isIntersecting) {
					classNames.split(' ').forEach(cls => el.classList.add(cls));
					if (onEnter && !(once && state.enterFired)) {
						onEnter();
						state.enterFired = true;
					}
				} else {
					if (!once) {
						classNames.split(' ').forEach(cls => el.classList.remove(cls));
					}
					if (onLeave && !(once && state.leaveFired)) {
						onLeave();
						state.leaveFired = true;
					}
				}
				checkUnobserve(observerParam);
			};

			const observer = new IntersectionObserver(
				([entry]) => {
					const wasIntersecting = state.isIntersecting;
					const isIntersecting = entry?.isIntersecting ?? false;
					if (wasIntersecting !== isIntersecting) {
						state.isIntersecting = isIntersecting;
						handleViewportChange(isIntersecting, observer);
					}
				},
				{ threshold: 0.1, rootMargin },
			);

			observer.observe(el);
			el.__vueInViewportObserver = observer;
		},
		updated(el, binding) {
			if (el.__vueInViewportObserver && binding.value !== binding.oldValue) {
				const observer = el.__vueInViewportObserver;
				observer.unobserve(el);
				observer.observe(el);
			}
		},
		unmounted(el) {
			if (el.__vueInViewportObserver) {
				el.__vueInViewportObserver.disconnect();
				delete el.__vueInViewportObserver;
			}
		},
	});
});
