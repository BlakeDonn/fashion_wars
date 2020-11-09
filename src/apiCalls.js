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

export const getImage = async (skins) => {
  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": "https://wiki.guildwars2.com/wiki/Acolyte_armor"
    }
  })
  if (response.ok) {
    let resolved = await response.text()
    let splitResolved = resolved.split('src=')
    let filteresResolved = splitResolved.filter(x => x.includes('height="400"'))
    let imagePath = filteresResolved[0].split(/decoding/gi)[0].slice(1, -1)
    return imagePath
  } else {
    return response.error
  }
}

