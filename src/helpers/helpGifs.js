const apiKey = 'E3tz28FivKKk4RtmkZdHwppgGlDCLcgr'

const helpGifs = () => {
   const fetchGifs = options => {
      // crear paginacion
      const { endpoint, query = '', offset = 0 } = options
      const limit = 23
      const gifsFrom = offset * 23
      const url = `http://api.giphy.com/v1/gifs/${endpoint}?&api_key=${apiKey}&limit=${limit}&q=${query}&offset=${gifsFrom}`
      return fetch(url)
         .then(res => res.json())
         .then(gifs => {
            // Si existe algun error lo devuelve rechazando la promesa
            if (gifs.meta.status !== 200) {
               return Promise.reject({
                  error: true,
                  status: gifs.meta.status,
                  statusText: gifs.meta.msg,
               })
            }
            return { gifs: [...gifs.data], pagination: gifs.pagination }
         })

         .catch(err => err)
   }

   const get = options => fetchGifs(options)

   return { get }
}

export default helpGifs
