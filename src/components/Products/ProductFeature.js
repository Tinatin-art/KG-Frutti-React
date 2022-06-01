import React from 'react'

const ProductFeature = () => {
  return (
    <div>
        <table className='feature'>
           <tbody>
                <tr>
                     <th>Артикул</th>
                     <td>01</td>
                 </tr>
                 <tr>
                     <th>Энергетическая ценность</th>
                     <td>47ккал</td>
                 </tr>
                 <tr>
                     <th>Пищевая ценность в 100 г продукта</th>
                     <td>углеводы 9,7г</td>
                 </tr>
                 <tr>
                     <th>Страна</th>
                     <td>Аргентина</td>
                 </tr>
           </tbody>
        </table>
    </div>
  )
}

export default ProductFeature