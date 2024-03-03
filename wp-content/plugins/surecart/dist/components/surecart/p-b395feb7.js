import{z as r}from"./p-7ef0f71c.js";const e=(n,e)=>r.includes(e)?n:n/100,t=r=>(null==r?void 0:r.amount_off)&&(null==r?void 0:r.currency)?n({amount:r.amount_off,currency:r.currency}):(null==r?void 0:r.percent_off)?wp.i18n.sprintf(wp.i18n.__("%1d%% off","surecart"),0|r.percent_off):"",n=({amount:r,currency:n})=>{const t=e(r,n);return`${new Intl.NumberFormat(void 0,{style:"currency",currency:n}).format(parseFloat(t.toFixed(2)))}`},s=(r="usd")=>{var n;return null===(n=new Intl.NumberFormat(void 0,{style:"currency",currency:r}).formatToParts().find((r=>"currency"===r.type)))||void 0===n?void 0:n.value},a=(r,n,e=wp.i18n.__("every","surecart"),t=wp.i18n.__("once","surecart"),i=!1)=>{switch(n){case"day":return`${e} ${wp.i18n.sprintf(i?wp.i18n._n("%d day","%d days",r,"surecart"):wp.i18n._n("day","%d days",r,"surecart"),r)}`;case"week":return`${e} ${wp.i18n.sprintf(i?wp.i18n._n("%d week","%d weeks",r,"surecart"):wp.i18n._n("week","%d weeks",r,"surecart"),r)}`;case"month":return`${e} ${wp.i18n.sprintf(i?wp.i18n._n("%d month","%d months",r,"surecart"):wp.i18n._n("month","%d months",r,"surecart"),r)}`;case"year":return`${e} ${wp.i18n.sprintf(i?wp.i18n._n("%d year","%d years",r,"surecart"):wp.i18n._n("year","%d years",r,"surecart"),r)}`;default:return t}},u=(r,n,e=wp.i18n.__("once","surecart"),t=!1)=>{switch(n){case"day":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d day","%d days",r,"surecart"):wp.i18n._n("day","%d days",r,"surecart"),r)}`;case"week":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d wk","%d wks",r,"surecart"):wp.i18n._n("wk","%d wks",r,"surecart"),r)}`;case"month":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d mo","%d months",r,"surecart"):wp.i18n._n("mo","%d mos",r,"surecart"),r)}`;case"year":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d yr","%d yrs",r,"surecart"):wp.i18n._n("yr","%d yrs",r,"surecart"),r)}`;default:return e}},c=(r,n={})=>{if(!r)return"";const{showOnce:e,labels:t,abbreviate:i}=n,{interval:a=wp.i18n.__("every","surecart")}=t||{};return`${d(r,a,e?wp.i18n.__("once","surecart"):"",i)} ${o(r,i)}`},d=(r,n,e=wp.i18n.__("once","surecart"),t=!1)=>r.recurring_interval_count&&r.recurring_interval&&1!==(null==r?void 0:r.recurring_period_count)?t?u(r.recurring_interval_count,r.recurring_interval,e):a(r.recurring_interval_count,r.recurring_interval,` ${n}`,e):"",o=(r,n=!1)=>(null==r?void 0:r.recurring_period_count)&&1!==(null==r?void 0:r.recurring_period_count)?n?`x ${r.recurring_period_count}`:` (${wp.i18n.sprintf(wp.i18n._n("%d payment","%d payments",r.recurring_period_count,"surecart"),r.recurring_period_count)})`:"",w=r=>wp.i18n.sprintf(wp.i18n._n("%d payment remaining","%d payments remaining",r,"surecart"),r),p=r=>{var n;return r?`${null===(n=null==r?void 0:r.product)||void 0===n?void 0:n.name} ${(null==r?void 0:r.name)?`— ${r.name}`:""}`:""};export{w as a,n as b,s as c,t as g,c as i,p,a as t};