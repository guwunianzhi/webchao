import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/ad/list',
    method: 'get',
    params
  })
}

export function getADList(params) {
  return request({
    url: '/advertise/list',
    method: 'post',
    params
  })
}

export function save(params) {
  return request({
    url: '/advertise/add',
    method: 'post',
    params
  })
}

// export function save(params) {
//   return request({
//     url: '/ad',
//     method: 'post',
//     params
//   })
// }


export function update(params) {
  return request({
    url: '/advertise/update',
    method: 'put',
    params
  })
}

export function remove(id) {
  return request({
    url: '/advertise/delete',
    method: 'delete',
    params: {
      id:id
    }
  })
}
