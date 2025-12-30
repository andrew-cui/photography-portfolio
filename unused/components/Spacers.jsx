const SM_Spacer = () => {
    return (
      <div className="h-1 my-2"/>
    )
  }
  
const MD_Spacer = () => {
    return (
        <div className="h-2 mt-3 mb-4"/>
    )
}

const LG_Spacer = () => {
    return (
        <div className="h-4 mt-5 mb-7"/>
    )
}

const XL_Spacer = () => {
    return (
        <div className="my-3" style={{height: '7.5em'}}/>
    )
}

export { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer }