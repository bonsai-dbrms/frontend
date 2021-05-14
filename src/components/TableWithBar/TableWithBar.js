import classes from './TableWithBar.module.css';
import React, { useState } from 'react';
import { get as LodashGet } from 'lodash';

const TableWithBar = ({ head, keys, data, totalCount, addIndex = false, }) => {
  
  return (
    <div className={classes.TableWithBar}>
      <div className={classes.Bar}>
        {totalCount>=0 && <div className={classes.Totalcount}>Total Count : {totalCount>=0 ? totalCount : null}</div>}
        <div className={classes.RightContainer}>
        </div>
      </div>
      <div className={classes.TableComponent}>
        <table>
          <tr>
            {head?.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          {data?.length ? (
            data.map((row, i) => (
              <tr>
                {addIndex ? <td>{i + 1}</td> : null}
                {keys?.map((key) => (
                  <td>{typeof LodashGet(row, key) !== 'boolean' ? LodashGet(row, key) : LodashGet(row, key).toString()}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={head?.length}>
                <div className={classes.NoData}>
                  <div>No Records To Display</div>
                </div>
              </td>
            </tr>
          )}
        </table>
      </div>


    </div>
  );
};

export default TableWithBar;
