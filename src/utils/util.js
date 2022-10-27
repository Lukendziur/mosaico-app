export const imgGalleryFunction = (data) => {
    if (data.length > 0) {
      
        const columnsArrays = []
        const numberOfColumns = data.length / 3 // * is a subjective number
        
        for (let i = 0; i < data.length; i += numberOfColumns) {
          let oneColumn = data.slice(i, i + numberOfColumns)
          columnsArrays.push(oneColumn)    
        }

        return columnsArrays;
      }
}