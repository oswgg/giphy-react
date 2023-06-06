const apiKey = 'E3tz28FivKKk4RtmkZdHwppgGlDCLcgr'

const helpGifs = () => {
   const fetchGifs = url => {
      return fetch(url)
         .then(res => res.json())
         .then(data => {
            if (data.meta.status !== 200)
               return Promise.reject({
                  error: true,
                  status: data.meta.status,
                  statusText: data.meta.msg,
               })

            return data
         })
         .catch(err => err)
   }

   const getDefault = () =>
      fetchGifs(
         `http://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&limit=20`
      )

   const getCategories = () =>
      fetchGifs(
         `http://api.giphy.com/v1/gifs/categories?&api_key=${apiKey}&limit=20`
      )

   return { getDefault, getCategories }
}
export default helpGifs
