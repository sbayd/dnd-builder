import { memo } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import classNames from 'classnames';
import StaticPage from '../../Preview/StaticPage';
import PageThumbnailActions from './PageThumbnailActions';

const SortablePageItem = SortableElement(({
  acceptedItems,
  additionalPageItems,
  disableInteraction,
  hashCode,
  isSelected,
  itemAccessor,
  onAnEventTrigger,
  onPageAdd,
  onPageClick,
  onPageDuplicate,
  onPageRemove,
  order,
  page,
  pageContainerStyle,
  style,
}) => {
  const onKeyDown = f => f;
  return (
    <div
      className={classNames('thumbnailWrapper d-flex a-center j-between', { isSelected })}
      data-id={page.id}
      data-order={order}
      onClick={onPageClick}
      onKeyDown={onKeyDown}
      style={style}
    >
      <div className="thumbnailOrder">{order}</div>
      <div className="thumbnailFrame o-hidden">
        <StaticPage
          acceptedItems={acceptedItems}
          additionalPageItems={additionalPageItems}
          hashCode={hashCode}
          itemAccessor={itemAccessor}
          items={page.items}
          style={pageContainerStyle}
        />
      </div>
      <PageThumbnailActions
        disableInteraction={disableInteraction}
        onAnEventTrigger={onAnEventTrigger}
        onPageAdd={onPageAdd}
        onPageDuplicate={onPageDuplicate}
        onPageRemove={onPageRemove}
        order={order}
        page={page}
      />
    </div>
  );
});

export default memo(SortablePageItem);
