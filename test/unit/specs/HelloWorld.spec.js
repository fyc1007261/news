import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('Like', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.like()).to.equal(true)
    expect(vm.g_heat).to.equal(101)
    expect(vm.like()).to.equal(false)
    expect(vm.g_heat).to.equal(101)
  })
})

describe('Hello.vue', () => {
  it('Dislike', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.dislike()).to.equal(true)
    expect(vm.g_heat).to.equal(99)
    expect(vm.dislike()).to.equal(false)
    expect(vm.g_heat).to.equal(99)
  })
})

describe('Hello.vue', () => {
  it('American Message display', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.message).to.equal('Kobe Bryant Jersey Retirement on Dec.19th!')
    expect(vm.g_region).to.equal('Am')
    expect(vm.inited).to.equal(1)
    expect(vm.g_heat).to.equal(100)
    vm.delete_n_next()
    vm.Am_click()
    expect(vm.message).to.equal('No news from America')
    expect(vm.pos).to.equal(-1)
  })
})

describe('Hello.vue', () => {
  it('African Message display', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Af_click()
    expect(vm.message).to.equal('Andrew Harding: What Ramaphosa victory means for South Africa')
    expect(vm.g_region).to.equal('Af')
    expect(vm.inited).to.equal(1)
    expect(vm.g_heat).to.equal(30)
    vm.delete_n_next()
    vm.Af_click()
    expect(vm.message).to.equal('No news from Africa')
    expect(vm.pos).to.equal(-1)
  })
})

describe('Hello.vue', () => {
  it('Asian Message display', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.As_click()
    expect(vm.message).to.equal('Asia is driving the Bitcoin craze?')
    expect(vm.g_region).to.equal('As')
    expect(vm.inited).to.equal(1)
    expect(vm.g_heat).to.equal(70)
    vm.delete_n_next()
    vm.As_click()
    expect(vm.message).to.equal('No news from Asia')
    expect(vm.pos).to.equal(-1)
  })
})

describe('Hello.vue', () => {
  it('European Message display', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Eu_click()
    expect(vm.message).to.equal('UK to soften Brexit impact on European banks!')
    expect(vm.g_region).to.equal('Eu')
    expect(vm.inited).to.equal(1)
    expect(vm.g_heat).to.equal(70)
    vm.delete_n_next()
    vm.Eu_click()
    expect(vm.message).to.equal('No news from Europe')
    expect(vm.pos).to.equal(-1)
  })
})

describe('Hello.vue', () => {
  it('Deletion', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.delete_n_next()).to.equal(true)
    expect(vm.pos).to.equal(-1)
    expect(vm.g_heat).to.equal(0)
    expect(vm.delete_n_next()).to.equal(false)
  })
})

describe('Hello.vue', () => {
  it('Publish', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.pub_click(true, 'America')
    vm.pub_click(true, 'Asia')
    vm.pub_click(true, 'Europe')
    vm.pub_click(true, 'Africa')
    vm.Am_click()
    vm.delete_n_next()
    expect(vm.message).to.equal('SJTU SE Group3 did a good job in their project!')
  })
})

describe('Hello.vue', () => {
  it('Sort', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.pub_click(true, 'Asia')
    vm.As_click()
    expect(vm.message).to.equal('Asia is driving the Bitcoin craze?')
  })
})
