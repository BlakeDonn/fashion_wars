export const getUserSkins = async () => {
  const response = await fetch('https://api.guildwars2.com/v2/account/skins?access_token=DC2293C1-9CF6-1C4D-A163-D8EF10B303CFF8EAC69C-ED5A-4F1B-B67E-410CCBF57CD4')
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
