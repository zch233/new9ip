import PollGetPayRequestModal from './index.vue'
import {createApp, h} from 'vue'

export const showPollGetPayRequestModal = ({ orderNo, tradeNo, type }: { orderNo: string;tradeNo: string;type: 'PATENT' | 'VIP' }) => {
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
      })
    }
  })
  app.mount(div)
}