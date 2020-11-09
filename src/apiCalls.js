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

export const getImage = async (name) => {
  const formattedName = name.split(" ")[0]
  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": `https://wiki.guildwars2.com/wiki/${formattedName}_armor`
    }
  })
  if (response.ok) {
    let resolved = await response.text()
    let splitResolved = resolved.split('src=')
    let filteredResolved = splitResolved.filter(x => x.includes('height="400"'))
    if (filteredResolved.length) {
      let imagePath = filteredResolved[0].split(/decoding/gi)[0].slice(1, -1)
      let finalPath = imagePath.slice(0, -1)
      return `https://wiki.guildwars2.com/${finalPath}`
    }
    return "No image found"
  } else {
    return response.error
  }
}

