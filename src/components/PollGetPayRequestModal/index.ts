import PollGetPayRequestModal from './index.vue'
import {createApp, h} from 'vue'

export const showPollGetPayRequestModal = ({ orderNo, tradeNo, type, getContainer }: { orderNo: string;tradeNo: string;type: 'PATENT' | 'VIP', getContainer: () => HTMLElement }) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(PollGetPayRequestModal, {
        visible: true,
        'onUpdate:visible': (newVisible: boolean) => {
          if (!newVisible) {
            app.unmount(div)
            div.remove()
          }
        },
        orderNo,
        tradeNo,
        type,
        getContainer: getContainer || document.body,
      })
    }
  })
  app.mount(div)
}