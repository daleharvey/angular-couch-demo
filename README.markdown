angular-couch-demo
=======

Modified version of [http://code.angularjs.org/tutorial/docs/#!tutorial](http://code.angularjs.org/tutorial/docs/#!tutorial) to work as a couchapp

Dependencies
============

[CouchDB](http://couchdb.apache.org/)
[The CouchApp Command line tool](http://couchapp.org/page/installing)

Building
========

        git clone git://github.com/daleharvey/angular-couch-demo.git
        cd angular-couch-demo
        couchapp init
        couchapp pushdocs _attachments/phones/ http://127.0.0.1:5984/phonecat
        couchapp push http://127.0.0.1:5984

then open [http://127.0.0.1:5984/phonecat/_design/v1/index.html#/phones](http://127.0.0.1:5984/phonecat/_design/v1/index.html#/phones) in your browser
