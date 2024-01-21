export const getSinglePlace = async (placename) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/destination/${placename}`
    );
    const result = await response.json();
    
    if (!result.data) {
      throw new Error("Place not found");
    }
    return result.data;
  } catch (error) {
    throw error;
  }
};
