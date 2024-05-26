import React, { FC } from 'react'

interface TitleFormProps {
  title: string;
  subTitle: string;
}

const TitleForm: FC<TitleFormProps> = ({ title, subTitle }) => {
  return (
    <div>
      <div className="text-lg font-semibold"> {title} </div>
      <div className="text-gray-500">
        {subTitle}
      </div>
    </div>
  )
}

export default TitleForm;