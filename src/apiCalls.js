export const getUserSkins = async () => {
  const response = await fetch(`https://api.guildwars2.com/v2/account/skins?access_token=${process.env.REACT_APP_API_KEY}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}

export const getAllSkins = async () => {
  const response = await fetch(`https://api.guildwars2.com/v2/skins`)
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}

export const getFilteredSkins = async (skins) => {
  const response = await fetch(`https://api.guildwars2.com/v2/skins?ids=${skins}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}

