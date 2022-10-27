export const imgGalleryFunction = (data) => {
  try {
    if (data.length > 0) {
      
        const columnsArrays = []
        const numberOfColumns = data.length / 3 // * 3 in this case is a random number. You can use the number of columns you want.
        
        for (let i = 0; i < data.length; i += numberOfColumns) {
          let oneColumn = data.slice(i, i + numberOfColumns)
          columnsArrays.push(oneColumn)    
        }

        return columnsArrays;
      }
    
  } catch (er) {
    console.error({message: er})
  }
}