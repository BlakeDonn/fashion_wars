export const getUserSkins = async () => {
  const response = await fetch(`https://api.guildwars2.com/v2/account/skins?access_token=${process.env.API_KEY}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}

export const geAllSkins = async () => {
  const response = await fetch('https://api.guildwars2.com/v1/skins.json')
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
