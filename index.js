// Convert Node.js DNS to use promise style callbacks   
(function (module) {
    'use strict'

    var dns = require('dns'),
        q = require('q');

    module.exports = {
        lookup: q.denodeify(dns.lookup),
        resolve: q.denodeify(dns.resolve),
        resolve4: q.denodeify(dns.resolve4),
        resolve6: q.denodeify(dns.resolve6),
        resolveMx: q.denodeify(dns.resolveMx),
        resolveTxt: q.denodeify(dns.resolveTxt),
        resolveSrv: q.denodeify(dns.resolveSrv),
        resolveNs: q.denodeify(dns.resolveNs),
        resolveCname: q.denodeify(dns.resolveCname),
        reverse: q.denodeify(dns.reverse)
    };
}(module));