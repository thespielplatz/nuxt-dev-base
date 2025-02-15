import consola from 'consola'

export default defineNitroPlugin(() => {
  const developmentMode = isDevelopmentMode()
  consola.info(`Development mode: ${developmentMode ? 'enabled' : 'disabled'}`)
})
